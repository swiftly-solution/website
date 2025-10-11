---
title: CSVCMsg_UpdateStringTable
---

```csharp
public interface CSVCMsg_UpdateStringTable : ITypedProtobuf<CSVCMsg_UpdateStringTable>, INativeHandle, INetMessage<CSVCMsg_UpdateStringTable>, IDisposable
```

#### Implements

## Properties

### **NumChangedEntries** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UpdateStringTable.cs#L21)

```csharp
int NumChangedEntries { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **StringData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UpdateStringTable.cs#L24)

```csharp
byte[] StringData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **TableId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UpdateStringTable.cs#L18)

```csharp
int TableId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

