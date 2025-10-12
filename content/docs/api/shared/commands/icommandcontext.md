---
title: ICommandContext
---

```csharp
public interface ICommandContext
```

## Properties

### Args

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L15)

```csharp
string[] Args { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)[]

### IsSentByPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L7)

```csharp
bool IsSentByPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSlient

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L13)

```csharp
bool IsSlient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Prefix

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L11)

```csharp
string Prefix { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Sender

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L9)

```csharp
IPlayer? Sender { get; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)?

## Methods

### Reply(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L17)

```csharp
void Reply(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string)

