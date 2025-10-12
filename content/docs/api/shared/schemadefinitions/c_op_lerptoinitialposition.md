---
title: C_OP_LerpToInitialPosition
---

```csharp
public interface C_OP_LerpToInitialPosition : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_LerpToInitialPosition>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **CacheField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L20)

```csharp
ParticleAttributeIndex_t CacheField { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **ControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L16)

```csharp
ref int ControlPointNumber { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Interpolation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L18)

```csharp
CPerParticleFloatInput Interpolation { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L22)

```csharp
CParticleCollectionFloatInput Scale { get; }
```

- Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **Scale1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_LerpToInitialPosition.cs#L24)

```csharp
CParticleCollectionVecInput Scale1 { get; }
```

- Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

