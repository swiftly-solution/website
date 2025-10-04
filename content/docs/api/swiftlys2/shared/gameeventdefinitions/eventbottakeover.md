---
title: EventBotTakeover
---

```csharp
public interface EventBotTakeover : IGameEvent<EventBotTakeover>
```

#### Implements

## Properties

**BotID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L38)

```csharp
int BotID { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**P** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L43)

```csharp
float P { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**R** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L53)

```csharp
float R { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L33)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L21)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L27)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

**Y** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBotTakeover.cs#L48)

```csharp
float Y { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

