---
title: C_OP_SetVec
---

```csharp
public interface C_OP_SetVec : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetVec>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **InputValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVec.cs#L16)

```csharp
CPerParticleVecInput InputValue { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/shared/schemadefinitions/cperparticlevecinput)

### **Lerp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVec.cs#L22)

```csharp
CPerParticleFloatInput Lerp { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **NormalizedOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVec.cs#L24)

```csharp
ref bool NormalizedOutput { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **OutputField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVec.cs#L18)

```csharp
ParticleAttributeIndex_t OutputField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **SetMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetVec.cs#L20)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

#### Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

