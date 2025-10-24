---
title: IOnCommandExecuteHookEvent
---

```csharp
public interface IOnCommandExecuteHookEvent
```

## Properties

### HookMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L23)

```csharp
HookMode HookMode { get; }
```

#### Property Value

- [HookMode](/docs/api/shared/misc/hookmode)

### OriginalArgs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L18)

```csharp
string[] OriginalArgs { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)[]

### OriginalName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L13)

```csharp
string OriginalName { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### SetCommandName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L30)

```csharp
void SetCommandName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name to modify.

