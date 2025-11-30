---
title: CBombTarget
---

# Interface CBombTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBombTarget : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CBombTarget>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseTrigger](/docs/api/schemadefinitions/cbasetrigger)
- [CBaseToggle](/docs/api/schemadefinitions/cbasetoggle)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseToggle>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseTrigger>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBombTarget>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BombPlantedHere

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L28)

```csharp
ref bool BombPlantedHere { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombSiteDesignation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L34)

```csharp
ref int BombSiteDesignation { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InstructorHint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L32)

```csharp
ref CHandle<CBaseEntity> InstructorHint { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### IsBombSiteB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L24)

```csharp
ref bool IsBombSiteB { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHeistBombTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L26)

```csharp
ref bool IsHeistBombTarget { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MountTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L30)

```csharp
string MountTarget { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OnBombDefused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L22)

```csharp
CEntityIOOutput OnBombDefused { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnBombExplode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L18)

```csharp
CEntityIOOutput OnBombExplode { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnBombPlanted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L20)

```csharp
CEntityIOOutput OnBombPlanted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

## Methods

### BombPlantedHereUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBombTarget.cs#L36)

```csharp
void BombPlantedHereUpdated()
```

