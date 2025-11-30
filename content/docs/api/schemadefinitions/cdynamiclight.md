---
title: CDynamicLight
---

# Interface CDynamicLight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDynamicLight : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CDynamicLight>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CDynamicLight>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActualFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L18)

```csharp
ref byte ActualFlags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Exponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L28)

```csharp
ref int Exponent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L20)

```csharp
ref byte Flags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### InnerAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L30)

```csharp
ref float InnerAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LightStyle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L22)

```csharp
ref byte LightStyle { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### True

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L24)

```csharp
ref bool On { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OuterAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L32)

```csharp
ref float OuterAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Radius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L26)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpotRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L34)

```csharp
ref float SpotRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ExponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L39)

```csharp
void ExponentUpdated()
```

### FlagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L36)

```csharp
void FlagsUpdated()
```

### InnerAngleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L40)

```csharp
void InnerAngleUpdated()
```

### LightStyleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L37)

```csharp
void LightStyleUpdated()
```

### OuterAngleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L41)

```csharp
void OuterAngleUpdated()
```

### RadiusUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L38)

```csharp
void RadiusUpdated()
```

### SpotRadiusUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDynamicLight.cs#L42)

```csharp
void SpotRadiusUpdated()
```

