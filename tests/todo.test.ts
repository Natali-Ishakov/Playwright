import { test, expect } from '@playwright/test';

test('should add a todo item', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  
  // הוסף משימה חדשה
  await page.fill('.new-todo', 'ללמוד אוטומציה');
  await page.press('.new-todo', 'Enter');
  
  // אמת שהמשימה הוספה
  const todoText = await page.textContent('.todo-list li');
  expect(todoText).toContain('ללמוד אוטומציה');
});
