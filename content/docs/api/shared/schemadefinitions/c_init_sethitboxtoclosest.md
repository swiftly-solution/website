---
title: C_INIT_SetHitboxToClosest
---

```csharp
public interface C_INIT_SetHitboxToClosest : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_SetHitboxToClosest>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ControlPointNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L17)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DesiredHitbox

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L19)

```csharp
ref int DesiredHitbox { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HitBoxScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L21)

```csharp
CParticleCollectionVecInput HitBoxScale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### HitboxSetName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L23)

```csharp
string HitboxSetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HybridRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L31)

```csharp
CParticleCollectionFloatInput HybridRatio { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### TestType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L29)

```csharp
ref ClosestPointTestType_t TestType { get; }
```

#### Property Value

- [ClosestPointTestType_t](/docs/api/shared/schemadefinitions/closestpointtesttype_t)

### UpdatePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L33)

```csharp
ref bool UpdatePosition { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseBones

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L25)

```csharp
ref bool UseBones { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseClosestPointOnHitbox

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToClosest.cs#L27)

```csharp
ref bool UseClosestPointOnHitbox { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

