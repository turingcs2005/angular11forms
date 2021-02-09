import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AbstractConstructor } from '@angular/material/core/common-behaviors/constructor';

const fb = new FormBuilder();

export const formObj = {
    myForm: fb.group({
        name: [''],
        stores: new FormArray([])
    }),

    get stores() {
        return this.myForm.get('stores');
    },

    addStore: function() {
        this.stores.push(fb.group({
            storeName: [''],
            purchases: new FormArray([])
        }));
        console.log('A store has been added.');
    },

    removeStore: function(i: number) {
        this.stores.removeAt(i);
    },

    addPurchase: function(p: FormArray) {
        p.push(fb.group({
            item: [''],
            price: [0]
        }));
    },

    removePurchase: function(p: FormArray, i: number) {
        p.removeAt(i);
    },

    sumUpPurchases() {
        let total = 0;
        for (const s of this.stores.controls) {
            for (const p of s.get('purchases')['controls']) {
                total += parseInt(p.get('price').value, 10);
            }
        }

        return total;
    },

    overbudget(budget: number = 100): boolean {
        return this.sumUpPurchases() > budget;
    },

    formIsValid(): boolean {
        return (this.myForm.valid) && (!this.overbudget());
    }


}
