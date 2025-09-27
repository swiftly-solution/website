---
title: CFuncMonitor
---

```csharp
public interface CFuncMonitor : CFuncBrush, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncBrush>, ISchemaClass<CFuncMonitor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BrushModelName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L24)

```csharp
ref CUtlString BrushModelName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Draw3DSkybox** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L30)

```csharp
ref bool Draw3DSkybox { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L28)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RenderShadows** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L20)

```csharp
ref bool RenderShadows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ResolutionEnum** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L18)

```csharp
ref int ResolutionEnum { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**StartEnabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L32)

```csharp
ref bool StartEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TargetCamera** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L16)

```csharp
ref CUtlString TargetCamera { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**TargetCamera1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L26)

```csharp
ref CHandle<CBaseEntity> TargetCamera1 { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**UseUniqueColorTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L22)

```csharp
ref bool UseUniqueColorTarget { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**BrushModelNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L38)

```csharp
void BrushModelNameUpdated()
```

**Draw3DSkyboxUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L41)

```csharp
void Draw3DSkyboxUpdated()
```

**EnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L40)

```csharp
void EnabledUpdated()
```

**RenderShadowsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L36)

```csharp
void RenderShadowsUpdated()
```

**ResolutionEnumUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L35)

```csharp
void ResolutionEnumUpdated()
```

**TargetCamera1Updated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L39)

```csharp
void TargetCamera1Updated()
```

**TargetCameraUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L34)

```csharp
void TargetCameraUpdated()
```

**UseUniqueColorTargetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMonitor.cs#L37)

```csharp
void UseUniqueColorTargetUpdated()
```

