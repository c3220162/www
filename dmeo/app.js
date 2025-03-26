// app.js
import db from './firebase';

// データをFirestoreに追加
const addData = async () => {
  try {
    await db.collection('users').add({
      name: 'John Doe',
      age: 30
    });
    console.log('データが追加されました');
  } catch (error) {
    console.error('エラー:', error);
  }
};

addData();
// app.js
import db from './firebase';

// データを取得
const getData = async () => {
  try {
    const snapshot = await db.collection('users').get();
    snapshot.forEach(doc => {
      console.log(doc.id, doc.data());
    });
  } catch (error) {
    console.error('エラー:', error);
  }
};

getData();
