---
title: CTriggerPhysics
---

```csharp
public interface CTriggerPhysics : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerPhysics>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AngularDamping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L24)

```csharp
ref float AngularDamping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AngularLimit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L22)

```csharp
ref float AngularLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CollapseToForcePoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L34)

```csharp
ref bool CollapseToForcePoint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ConvertToDebrisWhenPossible** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L40)

```csharp
ref bool ConvertToDebrisWhenPossible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **DampingRatio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L30)

```csharp
ref float DampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Frequency** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L28)

```csharp
ref float Frequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **GravityScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L16)

```csharp
ref float GravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LinearDamping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L20)

```csharp
ref float LinearDamping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LinearForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L26)

```csharp
ref float LinearForce { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LinearForceDirection** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L38)

```csharp
ref Vector LinearForceDirection { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **LinearForcePointAt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L32)

```csharp
ref Vector LinearForcePointAt { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **LinearForcePointAtWorld** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L36)

```csharp
ref Vector LinearForcePointAtWorld { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **LinearLimit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L18)

```csharp
ref float LinearLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### **AngularDampingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L46)

```csharp
void AngularDampingUpdated()
```

### **AngularLimitUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L45)

```csharp
void AngularLimitUpdated()
```

### **CollapseToForcePointUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L51)

```csharp
void CollapseToForcePointUpdated()
```

### **ConvertToDebrisWhenPossibleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L54)

```csharp
void ConvertToDebrisWhenPossibleUpdated()
```

### **DampingRatioUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L49)

```csharp
void DampingRatioUpdated()
```

### **FrequencyUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L48)

```csharp
void FrequencyUpdated()
```

### **GravityScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L42)

```csharp
void GravityScaleUpdated()
```

### **LinearDampingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L44)

```csharp
void LinearDampingUpdated()
```

### **LinearForceDirectionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L53)

```csharp
void LinearForceDirectionUpdated()
```

### **LinearForcePointAtUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L50)

```csharp
void LinearForcePointAtUpdated()
```

### **LinearForcePointAtWorldUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L52)

```csharp
void LinearForcePointAtWorldUpdated()
```

### **LinearForceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L47)

```csharp
void LinearForceUpdated()
```

### **LinearLimitUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerPhysics.cs#L43)

```csharp
void LinearLimitUpdated()
```

