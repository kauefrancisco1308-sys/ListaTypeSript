//condicionais

import { q1condi } from './condicionais/q1cond';
import { q2condi } from './condicionais/q2cond';
import { q3condi } from './condicionais/q3cond';
import { q4condi } from './condicionais/q4cond';

document.getElementById('q4cond')?.addEventListener('click', q4condi);
document.getElementById('q3cond')?.addEventListener('click', q3condi);
document.getElementById('q2cond')?.addEventListener('click', q2condi);
document.getElementById('q1cond')?.addEventListener('click', q1condi); 

//repetição

import { q1rep } from './repetição/q1rep';
import { q2rep } from './repetição/q2rep';
import { q3rep } from './repetição/q3rep';
import { q4rep } from './repetição/q4rep';

document.getElementById('q4rep')?.addEventListener('click', q4rep); 
document.getElementById('q3rep')?.addEventListener('click', q3rep);
document.getElementById('q2rep')?.addEventListener('click', q2rep);
document.getElementById('q1rep')?.addEventListener('click', q1rep);

// 
import { q1fun } from './funções/q1fun';
import { q2fun } from './funções/q2fun';

document.getElementById('q1fun')?.addEventListener('click', q1fun);
document.getElementById('q2fun')?.addEventListener('click', q2fun);