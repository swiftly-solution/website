---
title: CEnvWindController
---

```csharp
public interface CEnvWindController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvWindController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ClipmapLevels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L32)

```csharp
ref int ClipmapLevels { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DirectionVariation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L18)

```csharp
ref float DirectionVariation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **EnvWindShared** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L16)

```csharp
CEnvWindShared EnvWindShared { get; }
```

#### Property Value

- [CEnvWindShared](/docs/api/shared/schemadefinitions/cenvwindshared)

### **FirstTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L36)

```csharp
ref bool FirstTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsMaster** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L34)

```csharp
ref bool IsMaster { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SpeedVariation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L20)

```csharp
ref float SpeedVariation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Turbulence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L22)

```csharp
ref float Turbulence { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **VolumeHalfExtentXY** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L24)

```csharp
ref float VolumeHalfExtentXY { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **VolumeHalfExtentZ** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L26)

```csharp
ref float VolumeHalfExtentZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **VolumeResolutionXY** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L28)

```csharp
ref int VolumeResolutionXY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **VolumeResolutionZ** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L30)

```csharp
ref int VolumeResolutionZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### **ClipmapLevelsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L46)

```csharp
void ClipmapLevelsUpdated()
```

### **DirectionVariationUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L39)

```csharp
void DirectionVariationUpdated()
```

### **EnvWindSharedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L38)

```csharp
void EnvWindSharedUpdated()
```

### **IsMasterUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L47)

```csharp
void IsMasterUpdated()
```

### **SpeedVariationUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L40)

```csharp
void SpeedVariationUpdated()
```

### **TurbulenceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L41)

```csharp
void TurbulenceUpdated()
```

### **VolumeHalfExtentXYUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L42)

```csharp
void VolumeHalfExtentXYUpdated()
```

### **VolumeHalfExtentZUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L43)

```csharp
void VolumeHalfExtentZUpdated()
```

### **VolumeResolutionXYUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L44)

```csharp
void VolumeResolutionXYUpdated()
```

### **VolumeResolutionZUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L45)

```csharp
void VolumeResolutionZUpdated()
```

