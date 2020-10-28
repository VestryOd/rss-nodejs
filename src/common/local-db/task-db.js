let DB = [
  {
    id: '822d5b25-3351-4450-8b99-f0e3f04b7377',
    title: 'The quick, brown fox jumps over a lazy dog.',
    order: 0,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    userId: '84f53ea6-8ff5-4b00-93d5-c69eb74d663a',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'd86a8d62-eb04-4c3f-909a-99e4e98ccac8'
  },
  {
    id: '31ad09b9-1a88-42de-863b-7ab50fd90b41',
    title: 'DJs flock by when MTV ax quiz prog.',
    order: 0,
    description: 'Aenean massa.',
    userId: 'f8f81be8-3193-41f5-bb25-a5ad01bd9e10',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'd86a8d62-eb04-4c3f-909a-99e4e98ccac8'
  },
  {
    id: '87d5411d-e63f-4ae8-9f6d-eed4f2defdc7',
    title: 'Junk MTV quiz graced by fox whelps.',
    order: 0,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    userId: '41b28ac7-2fee-438b-94f3-ceb7bffb9294',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a3ec1ae1-f6b2-4e9d-b522-80dd8fcc0d1b'
  },
  {
    id: '165be30e-d212-4b0c-884d-3af266cc5c91',
    title: 'Bawds jog, flick quartz, vex nymphs.',
    order: 0,
    description:
      'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    userId: '84f53ea6-8ff5-4b00-93d5-c69eb74d663a',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a8083d16-d556-4e5a-98bb-b01daea70e98'
  },
  {
    id: '688e4edd-a893-4546-af26-f3184859ac56',
    title: 'Waltz, bad nymph, for quick jigs vex!',
    order: 0,
    description: 'Nulla consequat massa quis enim.',
    userId: 'f06b1e42-34b2-4f09-a01a-e649264cea3c',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a3ec1ae1-f6b2-4e9d-b522-80dd8fcc0d1b'
  },
  {
    id: '3d208b18-79bd-49eb-ba1f-0fbabb16219d',
    title: 'Fox nymphs grab quick-jived waltz.',
    order: 0,
    description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
    userId: '84f53ea6-8ff5-4b00-93d5-c69eb74d663a',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a8083d16-d556-4e5a-98bb-b01daea70e98'
  },
  {
    id: 'b7961d41-e85c-4bff-9a7e-cbbc945b16b4',
    title: 'Brick quiz whangs jumpy veldt fox.',
    order: 0,
    description:
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    userId: 'd6aae987-e54f-4abe-bf2e-34476a7bb21b',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'd86a8d62-eb04-4c3f-909a-99e4e98ccac8'
  },
  {
    id: 'ca3c0431-173d-463d-8247-dac8056beac6',
    title: 'Bright vixens jump; dozy fowl quack.',
    order: 1,
    description:
      'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
    userId: 'd65f4008-4f8e-41f0-8fcd-b3425998f127',
    boardId: 'b4bf8a25-ae5a-4caf-bdaf-0f3686eb5be0',
    columnId: '4dd6714b-1ae1-4bfa-8dc0-b3d4537ded8a'
  },
  {
    id: '0236f523-a3a6-4cc8-9d59-1890a4c220a1',
    title: 'Quick wafting zephyrs vex bold Jim.',
    order: 1,
    description:
      'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
    userId: 'd65f4008-4f8e-41f0-8fcd-b3425998f127',
    boardId: 'b4bf8a25-ae5a-4caf-bdaf-0f3686eb5be0',
    columnId: '8887e19d-2f71-4a4a-b520-901c9372a5f2'
  },
  {
    id: '5d23a2af-4414-44cc-8435-7b361f88b907',
    title: 'Quick zephyrs blow, vexing daft Jim.',
    order: 1,
    description:
      'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
    userId: '41b28ac7-2fee-438b-94f3-ceb7bffb9294',
    boardId: 'b4bf8a25-ae5a-4caf-bdaf-0f3686eb5be0',
    columnId: '8887e19d-2f71-4a4a-b520-901c9372a5f2'
  },
  {
    id: '9cedfc26-1514-474b-9a26-c23de11cb533',
    title: 'Sex-charged fop blew my junk TV quiz.',
    order: 2,
    description:
      'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    userId: 'f8f81be8-3193-41f5-bb25-a5ad01bd9e10',
    boardId: 'b4bf8a25-ae5a-4caf-bdaf-0f3686eb5be0',
    columnId: '4dd6714b-1ae1-4bfa-8dc0-b3d4537ded8a'
  },
  {
    id: 'b7c3eda2-8509-4ea3-8ac4-3ce879fe6056',
    title: 'How quickly daft jumping zebras vex.',
    order: 0,
    description:
      'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
    userId: 'f76476dc-3904-4179-bdde-d380e276a6fe',
    boardId: '40bdc6ad-66c3-4d7b-aeaa-9f416cfe9ec5',
    columnId: '273470ba-ab0e-48e8-b9aa-82a1199d19e7'
  },
  {
    id: 'b9ee6490-ccba-418c-90e2-62eccaa9de3d',
    title: 'Two driven jocks help fax my big quiz.',
    order: 3,
    description:
      'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
    userId: '17071910-68c4-4551-936b-f60e481eee45',
    boardId: '40bdc6ad-66c3-4d7b-aeaa-9f416cfe9ec5',
    columnId: '273470ba-ab0e-48e8-b9aa-82a1199d19e7'
  },
  {
    id: '7365460b-0561-40ad-bef2-147a2b6a2e37',
    title: 'Quick, Baz, get my woven flax jodhpurs!',
    order: 1,
    description:
      'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
    userId: 'd6aae987-e54f-4abe-bf2e-34476a7bb21b',
    boardId: '40bdc6ad-66c3-4d7b-aeaa-9f416cfe9ec5',
    columnId: '273470ba-ab0e-48e8-b9aa-82a1199d19e7'
  },
  {
    id: '13d2c757-a7ee-4030-b84b-0c862a07d7d1',
    title: '"Now fax quiz Jack!',
    order: 1,
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
    userId: 'f76476dc-3904-4179-bdde-d380e276a6fe',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: 'e5dd73eb-4dbb-4f61-bcf9-11112284edd8'
  },
  {
    id: '2e7023ce-5a89-403f-898d-3a46dfab21ad',
    title: '" my brave ghost pled.',
    order: 0,
    description:
      'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.',
    userId: '41b28ac7-2fee-438b-94f3-ceb7bffb9294',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: 'e5dd73eb-4dbb-4f61-bcf9-11112284edd8'
  },
  {
    id: 'e8f496ad-e747-45a5-9ab0-bac6bb5e6d12',
    title: 'Five quacking zephyrs jolt my wax bed.',
    order: 4,
    description:
      'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.',
    userId: '41b28ac7-2fee-438b-94f3-ceb7bffb9294',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: 'e5dd73eb-4dbb-4f61-bcf9-11112284edd8'
  },
  {
    id: 'fe3c9888-99cb-46b5-9ddf-c6eb981a7b88',
    title: 'Flummoxed by job, kvetching W.',
    order: 2,
    description: 'Donec sodales sagittis magna.',
    userId: 'd65f4008-4f8e-41f0-8fcd-b3425998f127',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: '820b1d91-c009-443e-9b54-6feff529d64a'
  },
  {
    id: '5f06abf6-ba5c-452f-93ac-0cc5eba01f18',
    title: 'zaps Iraq.',
    order: 3,
    description:
      'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.',
    userId: '84f53ea6-8ff5-4b00-93d5-c69eb74d663a',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: 'e5dd73eb-4dbb-4f61-bcf9-11112284edd8'
  },
  {
    id: '04b23f99-5460-430c-9cb1-b8545a1fe8e8',
    title: 'Cozy sphinx waves quart jug of bad milk.',
    order: 2,
    description:
      'Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
    userId: 'f76476dc-3904-4179-bdde-d380e276a6fe',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: '820b1d91-c009-443e-9b54-6feff529d64a'
  },
  {
    id: '986d376a-a61c-41d4-b901-db5f36414171',
    title: 'A very bad quack might jinx zippy fowls.',
    order: 5,
    description:
      'Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.',
    userId: '41b28ac7-2fee-438b-94f3-ceb7bffb9294',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'd86a8d62-eb04-4c3f-909a-99e4e98ccac8'
  },
  {
    id: '54fdecab-ad33-46ec-87e4-f48ff493c33d',
    title: 'Few quips galvanized the mock jury box.',
    order: 1,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.',
    userId: 'd6aae987-e54f-4abe-bf2e-34476a7bb21b',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a8083d16-d556-4e5a-98bb-b01daea70e98'
  },
  {
    id: '91383ede-04ef-44cf-9382-c101675a5058',
    title: 'Quick brown dogs jump over the lazy fox.',
    order: 1,
    description:
      'Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
    userId: 'f8f81be8-3193-41f5-bb25-a5ad01bd9e10',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a3ec1ae1-f6b2-4e9d-b522-80dd8fcc0d1b'
  },
  {
    id: '9314e215-b016-40b2-87a3-9a1e219d535f',
    title: 'The jay, pig, fox, zebra, and my wolves quack!',
    order: 1,
    description:
      'Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.',
    userId: 'f06b1e42-34b2-4f09-a01a-e649264cea3c',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: '820b1d91-c009-443e-9b54-6feff529d64a'
  },
  {
    id: '662db3c9-a2d1-4f25-b1c5-67437f51591e',
    title: 'Blowzy red vixens fight for a quick jump.',
    order: 3,
    description:
      'Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.',
    userId: 'd6aae987-e54f-4abe-bf2e-34476a7bb21b',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'e7bae7e9-3784-4309-93dd-b1ee0ea809ac'
  },
  {
    id: '01302927-467d-42bd-b2b2-2d3d461de3bc',
    title: 'Joaquin Phoenix was gazed by MTV for luck.',
    order: 1,
    description:
      'Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus.',
    userId: 'd6aae987-e54f-4abe-bf2e-34476a7bb21b',
    boardId: '40bdc6ad-66c3-4d7b-aeaa-9f416cfe9ec5',
    columnId: '273470ba-ab0e-48e8-b9aa-82a1199d19e7'
  },
  {
    id: '1a48d995-09ce-4ad1-9695-5b1e123a1b58',
    title: 'A wizard’s job is to vex chumps quickly in fog.',
    order: 0,
    description:
      'Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque.',
    userId: '84f53ea6-8ff5-4b00-93d5-c69eb74d663a',
    boardId: '40bdc6ad-66c3-4d7b-aeaa-9f416cfe9ec5',
    columnId: '273470ba-ab0e-48e8-b9aa-82a1199d19e7'
  },
  {
    id: '5542bfa3-f9b6-4cac-8ac5-fe4141e6b5bc',
    title: 'Watch "Jeopardy!"',
    order: 2,
    description:
      'Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.',
    userId: '84f53ea6-8ff5-4b00-93d5-c69eb74d663a',
    boardId: '22a247c8-d3a0-4d1b-a3bc-193f8c4e7075',
    columnId: 'e5dd73eb-4dbb-4f61-bcf9-11112284edd8'
  },
  {
    id: 'af09c382-707f-43c7-877f-63039972b5f2',
    title: '"Alex Trebek\'s fun TV quiz game."',
    order: 2,
    description:
      'Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.',
    userId: 'f8f81be8-3193-41f5-bb25-a5ad01bd9e10',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a8083d16-d556-4e5a-98bb-b01daea70e98'
  },
  {
    id: '00c1128e-6a20-4f36-bacd-981a015f2699',
    title: 'Woven silk pyjamas exchanged for blue quartz. Brawny gods just',
    order: 2,
    description:
      'Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac',
    userId: '41b28ac7-2fee-438b-94f3-ceb7bffb9294',
    boardId: '0caf415b-0294-454c-af4b-566e8c7c2812',
    columnId: 'a3ec1ae1-f6b2-4e9d-b522-80dd8fcc0d1b'
  }
];

const getById = id => DB.filter(task => task.id === id)[0];

const findTask = id => {
  const result = {};
  DB.forEach((task, idx) => {
    if (task.id === id) {
      result.data = { ...task };
      result.index = idx;
    }
  });
  return result;
};

const getAllByBoardId = async boardId =>
  DB.filter(task => task.boardId === boardId);

const createTask = task => {
  DB.push(task);
  return getById(task.id);
};

const editTask = task => {
  const { data, index } = findTask(task.id);
  if (data && index) {
    DB[index] = {
      ...data,
      ...task
    };
  }
  return !data && !index ? null : getById(task.id);
};

const deleteById = async id => {
  const { data, index } = findTask(id);
  let deleted = null;
  if (data && index) {
    deleted = DB.splice(index, 1);
  }
  return !deleted || !deleted.length
    ? null
    : `Task ${data.title} with id ${id} was deleted`;
};

const deleteTaskByBoard = boardId => {
  const cleared = DB.filter(task => task.boardId !== boardId);
  DB = [...cleared];
  return getAllByBoardId(boardId);
};

const updateTaskWhenUserDeleted = userId => {
  const updated = DB.map(task =>
    task.userId !== userId
      ? task
      : {
          ...task,
          userId: null
        }
  );
  DB = [...updated];
  return DB.filter(el => el.userId === userId);
};

module.exports = {
  getAllByBoardId,
  createTask,
  getById,
  editTask,
  deleteById,
  deleteTaskByBoard,
  updateTaskWhenUserDeleted
};
