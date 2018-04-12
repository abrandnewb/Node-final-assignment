import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    title(){
        return faker.company.catchPhrase();
    },
    body(){
        return faker.lorem.paragraph(35);
    },
    date(){
        return faker.date.past();
    }
});
