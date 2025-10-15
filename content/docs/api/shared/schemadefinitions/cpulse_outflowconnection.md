---
title: CPulse_OutflowConnection
---

```csharp
public interface CPulse_OutflowConnection : ISchemaClass<CPulse_OutflowConnection>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DestChunk

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L20)

```csharp
PulseRuntimeChunkIndex_t DestChunk { get; }
```

#### Property Value

- [PulseRuntimeChunkIndex_t](/docs/api/shared/schemadefinitions/pulseruntimechunkindex_t)

### Instruction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L22)

```csharp
ref int Instruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutflowRegisterMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L24)

```csharp
PulseRegisterMap_t OutflowRegisterMap { get; }
```

#### Property Value

- [PulseRegisterMap_t](/docs/api/shared/schemadefinitions/pulseregistermap_t)

### SourceOutflowName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_OutflowConnection.cs#L18)

```csharp
SchemaUntypedField SourceOutflowName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

