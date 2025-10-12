---
title: CSVCMsg_GetCvarValue
---

```csharp
public interface CSVCMsg_GetCvarValue : ITypedProtobuf<CSVCMsg_GetCvarValue>, INativeHandle, INetMessage<CSVCMsg_GetCvarValue>, IDisposable
```

- Implements

## Properties

### **Cookie** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GetCvarValue.cs#L18)

```csharp
int Cookie { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **CvarName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_GetCvarValue.cs#L21)

```csharp
string CvarName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

