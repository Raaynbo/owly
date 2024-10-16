
I need to do a tree selector and an option to create task inside a project


tree selector 

div treeviz
div actionbtn
div path

actual = object(project/task)
array tree 
    tree.push(e.target.value);

div treeviz
    actual.steps.forEach(child)
    display each child name, 1/row
    each child has onlclick method to update treeselector
    {
        tree.push(clickedIndex);
        actual = selected child
        rendertree selector
    }


div actionbtn
    pjt directory
    back
    


div path display 
        path.textContent += tree[i].name;
