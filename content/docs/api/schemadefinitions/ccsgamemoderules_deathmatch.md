---
title: CCSGameModeRules_Deathmatch
---

# Interface CCSGameModeRules_Deathmatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSGameModeRules_Deathmatch : CCSGameModeRules, ISchemaClass<CCSGameModeRules>, ISchemaClass<CCSGameModeRules_Deathmatch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CCSGameModeRules](/docs/api/schemadefinitions/ccsgamemoderules)
- [ISchemaClass<CCSGameModeRules>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSGameModeRules_Deathmatch>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DMBonusStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L18)

```csharp
GameTime_t DMBonusStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### DMBonusTimeLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L20)

```csharp
ref float DMBonusTimeLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DMBonusWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L22)

```csharp
string DMBonusWeapon { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### DMBonusStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L24)

```csharp
void DMBonusStartTimeUpdated()
```

### DMBonusTimeLengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L25)

```csharp
void DMBonusTimeLengthUpdated()
```

### DMBonusWeaponUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameModeRules_Deathmatch.cs#L26)

```csharp
void DMBonusWeaponUpdated()
```

