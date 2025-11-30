---
title: CSoundEventPathCornerEntity
---

# Interface CSoundEventPathCornerEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSoundEventPathCornerEntity : CSoundEventEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundEventEntity>, ISchemaClass<CSoundEventPathCornerEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSoundEventEntity](/docs/api/schemadefinitions/csoundevententity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundEventEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundEventPathCornerEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CornerPairsNetworked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L30)

```csharp
ref CUtlVector<SoundeventPathCornerPairNetworked_t> CornerPairsNetworked { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SoundeventPathCornerPairNetworked_t](/docs/api/schemadefinitions/soundeventpathcornerpairnetworked_t)>

### CountMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L20)

```csharp
ref int CountMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DistMaxSqr

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L24)

```csharp
ref float DistMaxSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L22)

```csharp
ref float DistanceMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DotProductMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L26)

```csharp
ref float DotProductMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathCorner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L18)

```csharp
string PathCorner { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Playing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L28)

```csharp
ref bool Playing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CornerPairsNetworkedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L32)

```csharp
void CornerPairsNetworkedUpdated()
```

