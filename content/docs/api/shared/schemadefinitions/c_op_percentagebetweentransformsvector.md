---
title: C_OP_PercentageBetweenTransformsVector
---

```csharp
public interface C_OP_PercentageBetweenTransformsVector : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_PercentageBetweenTransformsVector>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **ActiveRange** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L32)

```csharp
ref bool ActiveRange { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FieldOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L16)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **InputMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L20)

```csharp
ref float InputMax { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InputMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L18)

```csharp
ref float InputMin { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OutputMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L24)

```csharp
ref Vector OutputMax { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **OutputMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L22)

```csharp
ref Vector OutputMin { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **RadialCheck** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L34)

```csharp
ref bool RadialCheck { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SetMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L30)

```csharp
ref ParticleSetMethod_t SetMethod { get; }
```

- Property Value

- [ParticleSetMethod_t](/docs/api/shared/schemadefinitions/particlesetmethod_t)

### **TransformEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L28)

```csharp
CParticleTransformInput TransformEnd { get; }
```

- Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

### **TransformStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_PercentageBetweenTransformsVector.cs#L26)

```csharp
CParticleTransformInput TransformStart { get; }
```

- Property Value

- [CParticleTransformInput](/docs/api/shared/schemadefinitions/cparticletransforminput)

