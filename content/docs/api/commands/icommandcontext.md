---
title: ICommandContext
---

# Interface ICommandContext

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Commands](/docs/api/commands)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ICommandContext
```

## Properties

### Args

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L30)

Gets the array of arguments passed with the command.

```csharp
string[] Args { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)[]

### IsSentByPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L10)

Gets a value indicating whether the command was sent by a player.

```csharp
bool IsSentByPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSlient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L25)

Gets a value indicating whether the command should be executed silently without broadcasting to other players.

```csharp
bool IsSlient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Prefix

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L20)

Gets the command name itself.

```csharp
string Prefix { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Sender

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L15)

Gets the player who sent the command, or null if the command was not sent by a player.

```csharp
IPlayer? Sender { get; }
```

#### Property Value

- [IPlayer](/docs/api/players/iplayer)?

## Methods

### Reply(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Commands/ICommandContext.cs#L36)

Sends a reply message to the command sender.

```csharp
void Reply(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message to send as a reply.

