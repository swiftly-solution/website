---
title: C_INIT_InitialVelocityNoise
---

```csharp
public interface C_INIT_InitialVelocityNoise : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_InitialVelocityNoise>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AbsVal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L16)

```csharp
ref Vector AbsVal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **AbsValInv** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L18)

```csharp
ref Vector AbsValInv { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **IgnoreDt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L34)

```csharp
ref bool IgnoreDt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NoiseScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L28)

```csharp
CPerParticleFloatInput NoiseScale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **NoiseScaleLoc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L30)

```csharp
CPerParticleFloatInput NoiseScaleLoc { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L22)

```csharp
CPerParticleFloatInput Offset { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **OffsetLoc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L20)

```csharp
CPerParticleVecInput OffsetLoc { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### **OutputMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L26)

```csharp
CPerParticleVecInput OutputMax { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### **OutputMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L24)

```csharp
CPerParticleVecInput OutputMin { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### **TransformInput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_InitialVelocityNoise.cs#L32)

```csharp
CParticleTransformInput TransformInput { get; }
```

#### Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

