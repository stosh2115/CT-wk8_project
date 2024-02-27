// internal imports
import { Category } from './types';
import { Task, TaskManager } from './TaskManager';

// Grab our form so we can put an eventListener on it
let characterForm = document.getElementById('character-form') as HTMLFormElement;
let weaponForm = document.getElementById('weapon-form') as HTMLFormElement;

// Instantiate the Task Manager
const taskManager = new TaskManager();

characterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the default behavior for our event

    const characterTypeInput = document.getElementById('character-type') as HTMLSelectElement;
    const characterNameInput = document.getElementById('character-name') as HTMLInputElement;

    // Grab the values
    let characterType = characterTypeInput.value;
    let characterName = characterNameInput.value;

    console.log(characterType, characterName);


    characterForm.reset();
});

weaponForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the default behavior for our event

    const weaponNameInput = document.getElementById('weapon-name') as HTMLInputElement;
    const weaponDamageInput = document.getElementById('weapon-damage') as HTMLInputElement;

    // Grab the values
    let weaponName = weaponNameInput.value;
    let weaponDamage = parseInt(weaponDamageInput.value);

    console.log(weaponName, weaponDamage);


    weaponForm.reset();
});



