---
title: CPulse_OutflowConnection
---

# Interface CPulse_OutflowConnection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulse_OutflowConnection : ISchemaClass<CPulse_OutflowConnection>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulse_OutflowConnection>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DestChunk

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L21)

```csharp
PulseRuntimeChunkIndex_t DestChunk { get; }
```

#### Property Value

- [PulseRuntimeChunkIndex_t](/docs/api/schemadefinitions/pulseruntimechunkindex_t)

### Instruction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L23)

```csharp
ref int Instruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutflowRegisterMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L25)

```csharp
PulseRegisterMap_t OutflowRegisterMap { get; }
```

#### Property Value

- [PulseRegisterMap_t](/docs/api/schemadefinitions/pulseregistermap_t)

### SourceOutflowName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L19)

```csharp
SchemaUntypedField SourceOutflowName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

