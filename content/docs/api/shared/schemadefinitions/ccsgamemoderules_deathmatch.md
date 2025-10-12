---
title: CCSGameModeRules_Deathmatch
---

```csharp
public interface CCSGameModeRules_Deathmatch : CCSGameModeRules, ISchemaClass<CCSGameModeRules>, ISchemaClass<CCSGameModeRules_Deathmatch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DMBonusStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L16)

```csharp
GameTime_t DMBonusStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### DMBonusTimeLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L18)

```csharp
ref float DMBonusTimeLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DMBonusWeapon

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L20)

```csharp
string DMBonusWeapon { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### DMBonusStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L22)

```csharp
void DMBonusStartTimeUpdated()
```

### DMBonusTimeLengthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L23)

```csharp
void DMBonusTimeLengthUpdated()
```

### DMBonusWeaponUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L24)

```csharp
void DMBonusWeaponUpdated()
```

