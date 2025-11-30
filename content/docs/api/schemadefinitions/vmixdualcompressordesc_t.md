---
title: VMixDualCompressorDesc_t
---

# Interface VMixDualCompressorDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDualCompressorDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VMixDualCompressorDesc_t : ISchemaClass<VMixDualCompressorDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VMixDualCompressorDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BandDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDualCompressorDesc_t.cs#L26)

```csharp
VMixDynamicsBand_t BandDesc { get; }
```

#### Property Value

- [VMixDynamicsBand_t](/docs/api/schemadefinitions/vmixdynamicsband_t)

### FldbKneeWidth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDualCompressorDesc_t.cs#L20)

```csharp
ref float FldbKneeWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PeakMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDualCompressorDesc_t.cs#L24)

```csharp
ref bool PeakMode { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RMSTimeMS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDualCompressorDesc_t.cs#L18)

```csharp
ref float RMSTimeMS { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WetMix

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDualCompressorDesc_t.cs#L22)

```csharp
ref float WetMix { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

