---
title: C_OP_OscillateVector
---

```csharp
public interface C_OP_OscillateVector : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_OscillateVector>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **EndTime_max** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L38)

```csharp
ref float EndTime_max { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **EndTime_min** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L36)

```csharp
ref float EndTime_min { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Field** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L24)

```csharp
ParticleAttributeIndex_t Field { get; }
```

- Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **FrequencyMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L22)

```csharp
ref Vector FrequencyMax { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **FrequencyMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L20)

```csharp
ref Vector FrequencyMin { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L30)

```csharp
ref bool Offset { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **OscAdd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L42)

```csharp
CPerParticleFloatInput OscAdd { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **OscMult** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L40)

```csharp
CPerParticleFloatInput OscMult { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **Proportional** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L26)

```csharp
ref bool Proportional { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ProportionalOp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L28)

```csharp
ref bool ProportionalOp { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RateMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L18)

```csharp
ref Vector RateMax { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **RateMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L16)

```csharp
ref Vector RateMin { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **RateScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L44)

```csharp
CPerParticleFloatInput RateScale { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **StartTime_max** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L34)

```csharp
ref float StartTime_max { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StartTime_min** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_OscillateVector.cs#L32)

```csharp
ref float StartTime_min { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

