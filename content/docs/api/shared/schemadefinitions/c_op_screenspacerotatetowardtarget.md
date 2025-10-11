---
title: C_OP_ScreenSpaceRotateTowardTarget
---

```csharp
public interface C_OP_ScreenSpaceRotateTowardTarget : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_ScreenSpaceRotateTowardTarget>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **OutputRemap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ScreenSpaceRotateTowardTarget.cs#L18)

```csharp
CParticleRemapFloatInput OutputRemap { get; }
```

#### Property Value

- [CParticleRemapFloatInput](/docs/api/shared/schemadefinitions/cparticleremapfloatinput)

### **ScreenEdgeAlignmentDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ScreenSpaceRotateTowardTarget.cs#L22)

```csharp
CPerParticleFloatInput ScreenEdgeAlignmentDistance { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **SetMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ScreenSpaceRotateTowardTarget.cs#L20)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

### **TargetPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ScreenSpaceRotateTowardTarget.cs#L16)

```csharp
CPerParticleVecInput TargetPosition { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

