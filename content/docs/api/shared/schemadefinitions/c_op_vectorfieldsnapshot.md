---
title: C_OP_VectorFieldSnapshot
---

```csharp
public interface C_OP_VectorFieldSnapshot : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_VectorFieldSnapshot>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AttributeToWrite** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L18)

```csharp
ParticleAttributeIndex_t AttributeToWrite { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **BoundaryDampening** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L26)

```csharp
ref float BoundaryDampening { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ControlPointNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L16)

```csharp
ref int ControlPointNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GridSpacing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L32)

```csharp
ref float GridSpacing { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Interpolation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L22)

```csharp
CPerParticleFloatInput Interpolation { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **LocalSpaceCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L20)

```csharp
ref int LocalSpaceCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **LockToSurface** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L30)

```csharp
ref bool LockToSurface { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L24)

```csharp
CPerParticleVecInput Scale { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### **SetVelocity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_VectorFieldSnapshot.cs#L28)

```csharp
ref bool SetVelocity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

