---
title: ICommandService.ClientChatHandler
---

```csharp
public delegate HookResult ICommandService.ClientChatHandler(int playerId, string text, bool teamonly)
```

#### Parameters

- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player id.
- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text.
- **teamonly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the text is for team only.

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult) - Whether the text should continue to be sent.

