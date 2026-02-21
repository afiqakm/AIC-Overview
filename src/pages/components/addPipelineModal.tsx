import {
    Button,
    Label,
    Modal,
    SearchField,
    Separator,
    Switch,
    useOverlayState,
} from '@heroui/react';
import { useState } from 'react';

import ItemCard from '../../components/atoms/ItemCard';
import { itemDetails } from '../../constants/itemDetails';
import { EItemCategory } from '../../enums/item';

type AddPipelineModalProps = {
    onSave: (inputId: string, outputId: string) => void;
};

const AddPipelineModal = ({ onSave }: AddPipelineModalProps) => {
    const [selectedInputId, setSelectedInputId] = useState<string | null>(null);
    const [selectedOutputId, setSelectedOutputId] = useState<string | null>(null);
    const [isGrouped, setIsGrouped] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [outputSearch, setOutputSearch] = useState('');

    const addPipelineModal = useOverlayState();

    const canSavePipeline = Boolean(selectedInputId && selectedOutputId);

    const handleCloseAddPipeline = () => {
        addPipelineModal.close();
        setSelectedInputId(null);
        setSelectedOutputId(null);
    };

    const handleSavePipeline = () => {
        if (!selectedInputId || !selectedOutputId) {
            return;
        }

        onSave(selectedInputId, selectedOutputId);
        handleCloseAddPipeline();
    };

    const renderInputItems = () => {
        if (isGrouped) {
            return (
                <div className='flex flex-col max-h-[98%] max-w-full overflow-y-auto'>
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Plant</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Plant)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Ore</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Ore)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Refined</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Refined)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Bottle</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Bottle)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Battery</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Battery)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Consumable</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Consumable)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Component</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Component)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Parts</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Parts)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Powder</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Powder)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Solution</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Solution)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Other</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Other)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                </div>
            );
        }
        return (
            <div className='flex flex-wrap justify-evenly gap-2 max-h-[98%] max-w-full overflow-y-auto'>
                {itemDetails.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedInputId(item.id)}
                        isButton
                        isSelected={selectedInputId === item.id}
                    />
                ))}
            </div>
        );
    };

    const renderOutputItems = () => {
        if (isGrouped) {
            return (
                <div className='flex flex-col max-h-[98%] max-w-full overflow-y-auto'>
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Plant</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Plant)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Ore</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Ore)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Refined</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Refined)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Bottle</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Bottle)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Battery</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Battery)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Consumable</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Consumable)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Component</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Component)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Parts</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Parts)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Powder</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Powder)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedOutputId(item.id)}
                                            isButton
                                            isSelected={selectedOutputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Solution</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Solution)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-2 py-4'>
                        <p>Other</p>
                        <div className='flex flex-wrap gap-2'>
                            {itemDetails.map((item) => {
                                if (item.category === EItemCategory.Other)
                                    return (
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onClick={() => setSelectedInputId(item.id)}
                                            isButton
                                            isSelected={selectedInputId === item.id}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <Separator />
                </div>
            );
        }
        return (
            <div className='flex flex-wrap justify-evenly gap-2 max-h-[98%] max-w-full overflow-y-auto'>
                {itemDetails.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedOutputId(item.id)}
                        isButton
                        isSelected={selectedOutputId === item.id}
                    />
                ))}
            </div>
        );
    };

    return (
        <Modal state={addPipelineModal}>
            <Modal.Trigger>
                <Button>Add Pipeline</Button>
            </Modal.Trigger>
            <Modal.Backdrop
                className='bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40'
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
                        <Modal.Body className='flex gap-4 px-4'>
                            <div className='flex-1 gap-4'>
                                <div className='flex justify-between items-center pb-4 py-2'>
                                    <p className='text-lg font-semibold text-white'>Input</p>
                                    <SearchField
                                        name='input-search'
                                        value={inputSearch}
                                        onChange={setInputSearch}
                                        variant='secondary'
                                    >
                                        <SearchField.Group>
                                            <SearchField.SearchIcon />
                                            <SearchField.Input
                                                className='w-60'
                                                placeholder='Search...'
                                            />
                                            <SearchField.ClearButton />
                                        </SearchField.Group>
                                    </SearchField>
                                </div>
                                {renderInputItems()}
                            </div>
                            <Separator orientation='vertical' />
                            <div className='flex-1'>
                                <div className='flex justify-between pb-4 py-2'>
                                    <p className='text-lg font-semibold text-white'>Output</p>
                                    <SearchField
                                        name='output-search'
                                        value={outputSearch}
                                        onChange={setOutputSearch}
                                        variant='secondary'
                                    >
                                        <SearchField.Group>
                                            <SearchField.SearchIcon />
                                            <SearchField.Input
                                                className='w-60'
                                                placeholder='Search...'
                                            />
                                            <SearchField.ClearButton />
                                        </SearchField.Group>
                                    </SearchField>
                                </div>
                                {renderOutputItems()}
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
                                <Button variant='tertiary' onPress={handleCloseAddPipeline}>
                                    Cancel
                                </Button>
                                <Button isDisabled={!canSavePipeline} onPress={handleSavePipeline}>
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
