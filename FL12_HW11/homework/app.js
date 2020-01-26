const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
function toggleOpenClose() {
  let pict = this.children[0].innerHTML;

  if (pict === 'folder_open') {
    this.children[0]innerHTML = 'folder'
  } else {
    this.children[0].innerHTML = 'folder_open'
  }

  let showFolder = this.nextElementSibling.style.display;

  if (showFolder === 'visible') {
    this.nextElementSibling.style.display = 'none';
  } else {
    this.nextElementSibling.style.display = 'block';
  }
}

function draw_DOM_Tree (structure, parent) {
  
}
