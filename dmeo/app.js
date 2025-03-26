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