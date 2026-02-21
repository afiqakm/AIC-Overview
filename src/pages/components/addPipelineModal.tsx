import {
    Button,
    Label,
    Modal,
    SearchField,
    Separator,
    Switch,
    useOverlayState,
} from '@heroui/react';
import { useMemo, useState } from 'react';

import ItemCard from '../../components/atoms/ItemCard';
import { itemDetails } from '../../constants/itemDetails';
import { EItemCategory } from '../../enums/item';
import { cn } from '../../lib/utils';
import type { TItem } from '../../types/item';

type AddPipelineModalProps = {
    onSave: (inputId: string, outputId: string) => void;
};

const itemGridClassName = cn(
    'grid h-full min-h-0 auto-rows-max content-start',
    'grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-2',
    'max-w-full overflow-y-auto',
);

const categoryOrder: EItemCategory[] = [
    EItemCategory.Plant,
    EItemCategory.Ore,
    EItemCategory.Refined,
    EItemCategory.Bottle,
    EItemCategory.Battery,
    EItemCategory.Consumable,
    EItemCategory.Component,
    EItemCategory.Parts,
    EItemCategory.Powder,
    EItemCategory.Solution,
    EItemCategory.Other,
];

const SortItems = (items: TItem[]) =>
    [...items].sort((a, b) => {
        if (a.tier !== b.tier) {
            return a.tier - b.tier;
        }

        return a.name.localeCompare(b.name);
    });

const FilterItemsBySearch = (items: TItem[], searchText: string) => {
    const normalizedSearch = searchText.trim().toLowerCase();

    if (!normalizedSearch) {
        return items;
    }

    return items.filter((item) => item.name.toLowerCase().includes(normalizedSearch));
};

const AddPipelineModal = ({ onSave }: AddPipelineModalProps) => {
    const [selectedInputId, setSelectedInputId] = useState<string | null>(null);
    const [selectedOutputId, setSelectedOutputId] = useState<string | null>(null);
    const [isGrouped, setIsGrouped] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [outputSearch, setOutputSearch] = useState('');

    const addPipelineModal = useOverlayState();

    const canSavePipeline = Boolean(selectedInputId && selectedOutputId);

    const filteredInputItems = useMemo(
        () => SortItems(FilterItemsBySearch(itemDetails, inputSearch)),
        [inputSearch],
    );
    const filteredOutputItems = useMemo(
        () => SortItems(FilterItemsBySearch(itemDetails, outputSearch)),
        [outputSearch],
    );

    console.log('filterInputItems', filteredInputItems);

    // useEffect(() => {
    //     if (inputSearch === '') {
    //         set
    //     }
    //     if (outputSearch === '') {
    //         setSelectedOutputId(null);
    //     }
    // }, [inputSearch, outputSearch]);

    const HandleCloseAddPipeline = () => {
        addPipelineModal.close();
        setSelectedInputId(null);
        setSelectedOutputId(null);
    };

    const HandleSavePipeline = () => {
        if (!selectedInputId || !selectedOutputId) {
            return;
        }

        onSave(selectedInputId, selectedOutputId);
        HandleCloseAddPipeline();
    };

    const HandleInputSearchChange = (value: string) => {
        console.log('value', value);

        setInputSearch(value);
    };

    const HandleOutputSearchChange = (value: string) => {
        setOutputSearch(value);
    };

    const RenderUngroupedItems = (
        items: TItem[],
        selectedId: string | null,
        onSelect: (itemId: string) => void,
    ) => {
        if (!items.length) {
            return (
                <div
                    className={cn(
                        'flex h-full min-h-0 items-center justify-center',
                        'text-sm text-zinc-400',
                    )}
                >
                    No items found.
                </div>
            );
        }

        return (
            <div className={itemGridClassName}>
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        className='w-full'
                        item={item}
                        onClick={() => onSelect(item.id)}
                        isButton
                        isSelected={selectedId === item.id}
                    />
                ))}
            </div>
        );
    };

    const RenderGroupedItems = (
        items: TItem[],
        selectedId: string | null,
        onSelect: (itemId: string) => void,
    ) => {
        const categoriesWithItems = categoryOrder
            .map((category) => ({
                category,
                items: items.filter((item) => item.category === category),
            }))
            .filter((entry) => entry.items.length > 0);

        if (!categoriesWithItems.length) {
            return (
                <div
                    className={cn(
                        'flex h-full min-h-0 items-center justify-center',
                        'text-sm text-zinc-400',
                    )}
                >
                    No items found.
                </div>
            );
        }

        return (
            <div className='flex h-full min-h-0 flex-col max-w-full overflow-y-auto'>
                {categoriesWithItems.map((entry, index) => (
                    <div key={entry.category}>
                        <div className='flex flex-col gap-2 py-4'>
                            <p>{entry.category}</p>
                            <div className='flex flex-wrap gap-2'>
                                {entry.items.map((item) => (
                                    <ItemCard
                                        key={item.id}
                                        item={item}
                                        onClick={() => onSelect(item.id)}
                                        isButton
                                        isSelected={selectedId === item.id}
                                    />
                                ))}
                            </div>
                        </div>
                        {index < categoriesWithItems.length - 1 && <Separator />}
                    </div>
                ))}
            </div>
        );
    };

    const RenderItemPanel = (
        items: TItem[],
        selectedId: string | null,
        onSelect: (itemId: string) => void,
    ) => {
        if (isGrouped) {
            return RenderGroupedItems(items, selectedId, onSelect);
        }

        return RenderUngroupedItems(items, selectedId, onSelect);
    };

    return (
        <Modal state={addPipelineModal}>
            <Modal.Trigger>
                <Button>Add Pipeline</Button>
            </Modal.Trigger>
            <Modal.Backdrop
                className={cn(
                    'bg-linear-to-t from-black/80 via-black/40 to-transparent',
                    'dark:from-zinc-800/80 dark:via-zinc-800/40',
                )}
                variant='blur'
            >
                <Modal.Container size='cover' scroll='inside'>
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>
                                <p className='text-3xl'>Add Pipeline</p>
                            </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className='flex min-h-0 gap-4 overflow-hidden px-4'>
                            <div className='flex min-h-0 flex-1 flex-col'>
                                <div className='flex items-center justify-between pb-4 py-2'>
                                    <p className='text-lg font-semibold text-white'>Input</p>
                                    <SearchField
                                        name='input-search'
                                        value={inputSearch}
                                        onChange={HandleInputSearchChange}
                                        aria-label='Search input items'
                                        variant='secondary'
                                    >
                                        <Label className='sr-only'>Search input items</Label>
                                        <SearchField.Group>
                                            <SearchField.SearchIcon />
                                            <SearchField.Input
                                                className='w-60'
                                                placeholder='Search...'
                                                aria-label='Search input items'
                                            />
                                            <SearchField.ClearButton />
                                        </SearchField.Group>
                                    </SearchField>
                                </div>
                                {RenderItemPanel(
                                    filteredInputItems,
                                    selectedInputId,
                                    setSelectedInputId,
                                )}
                            </div>
                            <Separator orientation='vertical' />
                            <div className='flex min-h-0 flex-1 flex-col'>
                                <div className='flex justify-between pb-4 py-2'>
                                    <p className='text-lg font-semibold text-white'>Output</p>
                                    <SearchField
                                        name='output-search'
                                        value={outputSearch}
                                        onChange={HandleOutputSearchChange}
                                        aria-label='Search output items'
                                        variant='secondary'
                                    >
                                        <Label className='sr-only'>Search output items</Label>
                                        <SearchField.Group>
                                            <SearchField.SearchIcon />
                                            <SearchField.Input
                                                className='w-60'
                                                placeholder='Search...'
                                                aria-label='Search output items'
                                            />
                                            <SearchField.ClearButton />
                                        </SearchField.Group>
                                    </SearchField>
                                </div>
                                {RenderItemPanel(
                                    filteredOutputItems,
                                    selectedOutputId,
                                    setSelectedOutputId,
                                )}
                            </div>
                        </Modal.Body>
                        <Modal.Footer className='flex justify-between'>
                            <div>
                                <Switch isSelected={isGrouped} onChange={setIsGrouped}>
                                    <Switch.Control>
                                        <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Content>
                                        <Label className='text-sm'>Group by Category</Label>
                                    </Switch.Content>
                                </Switch>
                            </div>
                            <div className='flex gap-2'>
                                <Button variant='tertiary' onPress={HandleCloseAddPipeline}>
                                    Cancel
                                </Button>
                                <Button isDisabled={!canSavePipeline} onPress={HandleSavePipeline}>
                                    Save Pipeline
                                </Button>
                            </div>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddPipelineModal;
