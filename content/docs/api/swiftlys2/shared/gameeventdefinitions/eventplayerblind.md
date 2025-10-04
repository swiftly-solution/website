---
title: EventPlayerBlind
---

```csharp
public interface EventPlayerBlind : IGameEvent<EventPlayerBlind>
```

#### Implements

## Properties

**Attacker** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerBlind.cs#L40)

```csharp
int Attacker { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**BlindDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerBlind.cs#L52)

```csharp
float BlindDuration { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**EntityID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerBlind.cs#L47)

```csharp
short EntityID { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerBlind.cs#L33)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerBlind.cs#L21)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerBlind.cs#L27)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

