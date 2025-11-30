---
title: sky3dparams_t
---

# Interface sky3dparams_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface sky3dparams_t : ISchemaClass<sky3dparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<sky3dparams_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Clip3DSkyBoxNearToWorldFar

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L22)

```csharp
ref bool Clip3DSkyBoxNearToWorldFar { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Clip3DSkyBoxNearToWorldFarOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L24)

```csharp
ref float Clip3DSkyBoxNearToWorldFarOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Fog

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L26)

```csharp
fogparams_t Fog { get; }
```

#### Property Value

- [fogparams_t](/docs/api/schemadefinitions/fogparams_t)

### Origin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L20)

```csharp
ref Vector Origin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Scale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L18)

```csharp
ref short Scale { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### WorldGroupID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L28)

```csharp
ref uint WorldGroupID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### Clip3DSkyBoxNearToWorldFarOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L33)

```csharp
void Clip3DSkyBoxNearToWorldFarOffsetUpdated()
```

### Clip3DSkyBoxNearToWorldFarUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L32)

```csharp
void Clip3DSkyBoxNearToWorldFarUpdated()
```

### FogUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L34)

```csharp
void FogUpdated()
```

### OriginUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L31)

```csharp
void OriginUpdated()
```

### ScaleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L30)

```csharp
void ScaleUpdated()
```

### WorldGroupIDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/sky3dparams_t.cs#L35)

```csharp
void WorldGroupIDUpdated()
```

