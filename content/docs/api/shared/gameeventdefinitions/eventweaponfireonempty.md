---
title: EventWeaponFireOnEmpty
---

```csharp
public interface EventWeaponFireOnEmpty : IGameEvent<EventWeaponFireOnEmpty>
```

#### Implements

## Properties

**UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFireOnEmpty.cs#L33)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFireOnEmpty.cs#L21)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFireOnEmpty.cs#L27)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

**Weapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFireOnEmpty.cs#L40)

```csharp
string Weapon { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

