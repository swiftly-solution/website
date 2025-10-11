---
title: C_OP_RemapAverageScalarValuetoCP
---

```csharp
public interface C_OP_RemapAverageScalarValuetoCP : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_RemapAverageScalarValuetoCP>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **DecimalPlaces** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L18)

```csharp
CParticleCollectionFloatInput DecimalPlaces { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **Expression** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L16)

```csharp
ref SetStatisticExpressionType_t Expression { get; }
```

#### Property Value

- [SetStatisticExpressionType_t](/docs/api/shared/schemadefinitions/setstatisticexpressiontype_t)

### **Field** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L24)

```csharp
ParticleAttributeIndex_t Field { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **OutControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L20)

```csharp
ref int OutControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OutVectorField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L22)

```csharp
ref int OutVectorField { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OutputRemap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapAverageScalarValuetoCP.cs#L26)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/shared/schemadefinitions/cparticleremapfloatinput)

