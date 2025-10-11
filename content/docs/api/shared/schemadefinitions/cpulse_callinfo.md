---
title: CPulse_CallInfo
---

```csharp
public interface CPulse_CallInfo : ISchemaClass<CPulse_CallInfo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **CallMethodID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L23)

```csharp
PulseDocNodeID_t CallMethodID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

### **EditorNodeID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L19)

```csharp
PulseDocNodeID_t EditorNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

### **PortName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L17)

```csharp
SchemaUntypedField PortName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **RegisterMap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L21)

```csharp
PulseRegisterMap_t RegisterMap { get; }
```

#### Property Value

- [PulseRegisterMap_t](/docs/api/shared/schemadefinitions/pulseregistermap_t)

### **SrcChunk** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L25)

```csharp
PulseRuntimeChunkIndex_t SrcChunk { get; }
```

#### Property Value

- [PulseRuntimeChunkIndex_t](/docs/api/shared/schemadefinitions/pulseruntimechunkindex_t)

### **SrcInstruction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_CallInfo.cs#L27)

```csharp
ref int SrcInstruction { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

