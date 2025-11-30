---
title: C_INIT_SetHitboxToModel
---

# Interface C_INIT_SetHitboxToModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_INIT_SetHitboxToModel : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_SetHitboxToModel>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionInitializer](/docs/api/schemadefinitions/cparticlefunctioninitializer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionInitializer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_INIT_SetHitboxToModel>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ControlPointNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L18)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DesiredHitbox

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L24)

```csharp
ref int DesiredHitbox { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DirectionBias

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L28)

```csharp
ref Vector DirectionBias { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### EvenDistribution

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L22)

```csharp
ref bool EvenDistribution { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceInModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L20)

```csharp
ref int ForceInModel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HitBoxScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L26)

```csharp
CParticleCollectionVecInput HitBoxScale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/schemadefinitions/cparticlecollectionvecinput)

### HitboxSetName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L34)

```csharp
string HitboxSetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaintainHitbox

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L30)

```csharp
ref bool MaintainHitbox { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShellSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L36)

```csharp
CParticleCollectionFloatInput ShellSize { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### UseBones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_SetHitboxToModel.cs#L32)

```csharp
ref bool UseBones { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

