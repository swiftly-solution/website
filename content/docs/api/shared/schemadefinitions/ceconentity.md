---
title: CEconEntity
---

```csharp
public interface CEconEntity : CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AttributeManager

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L17)

```csharp
CAttributeContainer AttributeManager { get; }
```

#### Property Value

- [CAttributeContainer](/docs/api/shared/schemadefinitions/cattributecontainer)

### FallbackPaintKit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L23)

```csharp
ref int FallbackPaintKit { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FallbackSeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L25)

```csharp
ref int FallbackSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FallbackStatTrak

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L29)

```csharp
ref int FallbackStatTrak { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FallbackWear

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L27)

```csharp
ref float FallbackWear { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldOwnerClass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L33)

```csharp
ref int OldOwnerClass { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OldProvidee

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L31)

```csharp
ref CHandle<CBaseEntity> OldProvidee { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### OriginalOwnerXuidHigh

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L21)

```csharp
ref uint OriginalOwnerXuidHigh { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### OriginalOwnerXuidLow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L19)

```csharp
ref uint OriginalOwnerXuidLow { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### AttributeManagerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L35)

```csharp
void AttributeManagerUpdated()
```

### FallbackPaintKitUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L38)

```csharp
void FallbackPaintKitUpdated()
```

### FallbackSeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L39)

```csharp
void FallbackSeedUpdated()
```

### FallbackStatTrakUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L41)

```csharp
void FallbackStatTrakUpdated()
```

### FallbackWearUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L40)

```csharp
void FallbackWearUpdated()
```

### OriginalOwnerXuidHighUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L37)

```csharp
void OriginalOwnerXuidHighUpdated()
```

### OriginalOwnerXuidLowUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconEntity.cs#L36)

```csharp
void OriginalOwnerXuidLowUpdated()
```

