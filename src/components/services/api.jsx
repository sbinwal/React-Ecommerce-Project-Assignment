import { USER_LOGIN } from '../../utils/APIRoutes';
import { WEBHOOK_ID, WEBHOOK_URL } from '../../utils/constants';

export const login = async (email, password) => {
  try {
    const response = await fetch(USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const SendPurchaseData = async (orderInfo) => {
  try {
    const response = await fetch(WEBHOOK_URL + "/" + WEBHOOK_ID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderInfo),
    });
    if (!response.ok) {
      throw new Error('failed');
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error caught:', error);
    throw error;
  }
};
