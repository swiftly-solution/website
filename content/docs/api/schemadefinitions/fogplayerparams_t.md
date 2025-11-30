---
title: fogplayerparams_t
---

# Interface fogplayerparams_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface fogplayerparams_t : ISchemaClass<fogplayerparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<fogplayerparams_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Ctrl

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L18)

```csharp
ref CHandle<CFogController> Ctrl { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CFogController](/docs/api/schemadefinitions/cfogcontroller)>

### NewColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L34)

```csharp
ref Color NewColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### NewEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L38)

```csharp
ref float NewEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NewFarZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L44)

```csharp
ref float NewFarZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NewHDRColorScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L42)

```csharp
ref float NewHDRColorScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NewMaxDensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L40)

```csharp
ref float NewMaxDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NewStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L36)

```csharp
ref float NewStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L22)

```csharp
ref Color OldColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### OldEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L26)

```csharp
ref float OldEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldFarZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L32)

```csharp
ref float OldFarZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldHDRColorScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L30)

```csharp
ref float OldHDRColorScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldMaxDensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L28)

```csharp
ref float OldMaxDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L24)

```csharp
ref float OldStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransitionTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L20)

```csharp
ref float TransitionTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### CtrlUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/fogplayerparams_t.cs#L46)

```csharp
void CtrlUpdated()
```

