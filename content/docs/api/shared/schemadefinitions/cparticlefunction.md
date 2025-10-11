---
title: CParticleFunction
---

```csharp
public interface CParticleFunction : ISchemaClass<CParticleFunction>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **DisableOperator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L44)

```csharp
ref bool DisableOperator { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NormalizeToStopTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L30)

```csharp
ref bool NormalizeToStopTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Notes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L46)

```csharp
string Notes { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **OpEndCapState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L18)

```csharp
ref ParticleEndcapMode_t OpEndCapState { get; }
```

#### Property Value

- [ParticleEndcapMode_t](/docs/api/shared/schemadefinitions/particleendcapmode_t)

### **OpEndFadeInTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L22)

```csharp
ref float OpEndFadeInTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpEndFadeOutTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L26)

```csharp
ref float OpEndFadeOutTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpFadeOscillatePeriod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L28)

```csharp
ref float OpFadeOscillatePeriod { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpStartFadeInTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L20)

```csharp
ref float OpStartFadeInTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpStartFadeOutTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L24)

```csharp
ref float OpStartFadeOutTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpStrength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L16)

```csharp
CParticleCollectionFloatInput OpStrength { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### **OpTimeOffsetMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L34)

```csharp
ref float OpTimeOffsetMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpTimeOffsetMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L32)

```csharp
ref float OpTimeOffsetMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpTimeOffsetSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L36)

```csharp
ref int OpTimeOffsetSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OpTimeScaleMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L42)

```csharp
ref float OpTimeScaleMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpTimeScaleMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L40)

```csharp
ref float OpTimeScaleMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpTimeScaleSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleFunction.cs#L38)

```csharp
ref int OpTimeScaleSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

