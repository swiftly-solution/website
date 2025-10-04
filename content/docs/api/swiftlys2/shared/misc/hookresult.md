---
title: HookResult
---

```csharp
public enum HookResult : uint
```

## Fields

- **Continue**: 0 - The executions of following hooks and original function will continue.


- **Handled**: 2 - The executions of following hooks will be cancelled, but the original function will continue.

Won't work for post hooks.


- **Stop**: 1 - The executions of following hooks and original function will all be cancelled.

Won't work for post hooks.



