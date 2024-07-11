async function fetchOpenAIData() {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'sdfa',
                'Authorization': 'key'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: 'Who Are You?' }],
                max_tokens: 50
            })
        });
 
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
 
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error Fetching Data From OpenAI:', error);
        return 'Error Fetching Data';
    }
 }
