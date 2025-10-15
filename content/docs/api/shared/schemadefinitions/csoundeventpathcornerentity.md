---
title: CSoundEventPathCornerEntity
---

```csharp
public interface CSoundEventPathCornerEntity : CSoundEventEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundEventEntity>, ISchemaClass<CSoundEventPathCornerEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CornerPairsNetworked

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L29)

```csharp
ref CUtlVector<SoundeventPathCornerPairNetworked_t> CornerPairsNetworked { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SoundeventPathCornerPairNetworked_t](/docs/api/shared/schemadefinitions/soundeventpathcornerpairnetworked_t)>

### CountMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L19)

```csharp
ref int CountMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DistMaxSqr

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L23)

```csharp
ref float DistMaxSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L21)

```csharp
ref float DistanceMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DotProductMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L25)

```csharp
ref float DotProductMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathCorner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L17)

```csharp
string PathCorner { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Playing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L27)

```csharp
ref bool Playing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CornerPairsNetworkedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventPathCornerEntity.cs#L31)

```csharp
void CornerPairsNetworkedUpdated()
```

