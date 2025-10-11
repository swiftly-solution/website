---
title: CPathParticleRope
---

```csharp
public interface CPathParticleRope : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPathParticleRope>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ColorTint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L30)

```csharp
ref Color ColorTint { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### **EffectIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L34)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> EffectIndex { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### **EffectName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L20)

```csharp
string EffectName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **EffectState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L32)

```csharp
ref int EffectState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MaxSimulationTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L18)

```csharp
ref float MaxSimulationTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ParticleSpacing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L24)

```csharp
ref float ParticleSpacing { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **PathNodes_Color** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L42)

```csharp
ref CUtlVector<Vector> PathNodes_Color { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### **PathNodes_Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L22)

```csharp
ref CUtlVector<CUtlSymbolLarge> PathNodes_Name { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)>

### **PathNodes_PinEnabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L44)

```csharp
ref CUtlVector<bool> PathNodes_PinEnabled { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### **PathNodes_Position** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L36)

```csharp
ref CUtlVector<Vector> PathNodes_Position { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### **PathNodes_RadiusScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L46)

```csharp
ref CUtlVector<float> PathNodes_RadiusScale { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **PathNodes_TangentIn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L38)

```csharp
ref CUtlVector<Vector> PathNodes_TangentIn { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### **PathNodes_TangentOut** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L40)

```csharp
ref CUtlVector<Vector> PathNodes_TangentOut { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### **Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L28)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Slack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L26)

```csharp
ref float Slack { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StartActive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L16)

```csharp
ref bool StartActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **ColorTintUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L51)

```csharp
void ColorTintUpdated()
```

### **EffectIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L53)

```csharp
void EffectIndexUpdated()
```

### **EffectStateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L52)

```csharp
void EffectStateUpdated()
```

### **ParticleSpacingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L48)

```csharp
void ParticleSpacingUpdated()
```

### **PathNodes_ColorUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L57)

```csharp
void PathNodes_ColorUpdated()
```

### **PathNodes_PinEnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L58)

```csharp
void PathNodes_PinEnabledUpdated()
```

### **PathNodes_PositionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L54)

```csharp
void PathNodes_PositionUpdated()
```

### **PathNodes_RadiusScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L59)

```csharp
void PathNodes_RadiusScaleUpdated()
```

### **PathNodes_TangentInUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L55)

```csharp
void PathNodes_TangentInUpdated()
```

### **PathNodes_TangentOutUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L56)

```csharp
void PathNodes_TangentOutUpdated()
```

### **RadiusUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L50)

```csharp
void RadiusUpdated()
```

### **SlackUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathParticleRope.cs#L49)

```csharp
void SlackUpdated()
```

