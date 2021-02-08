import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

export const customer = new FormGroup({
    name: new FormControl('', Validators.required),
    stores: new FormGroup({})
});



