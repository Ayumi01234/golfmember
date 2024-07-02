function allocateGroups() {
    let namesInput = document.getElementById('participant-names').value.trim();
    if (namesInput === '') {
      alert('ラウンドメンバーを教えてね！');
      return;
    }

    let participants = namesInput.split(',').map(name => name.trim()).filter(name => name !== '');

    let groupSize;
    if (participants.length % 4 === 0) {
      groupSize = 4;
    } else if (participants.length % 3 === 0) {
      groupSize = 3;
    } else {
      groupSize = Math.ceil(participants.length / Math.ceil(participants.length / 4));
    }

    let groups = [];
    for (let i = 0; i < participants.length; i += groupSize) {
      groups.push(participants.slice(i, i + groupSize));
    }

    let displayHtml = '';
    groups.forEach((group, index) => {
      displayHtml += `<div class="group">
                        <div class="group-title">Group ${index + 1}</div>`;
      group.forEach(member => {
        displayHtml += `<div class="member">${member}</div>`;
      });
      displayHtml += `</div>`;
    });

    document.getElementById('group-display').innerHTML = displayHtml;
  }
